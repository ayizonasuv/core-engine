// parser.js
import { ASTNode } from './ast-node';
import { Lexer } from './lexer';
import { Token } from './token';
import { ErrorReporter } from './error-reporter';

class Parser {
  constructor(lexer) {
    this.lexer = lexer;
    this.currentToken = lexer.getToken();
    this.errors = new ErrorReporter();
  }

  get token() {
    return this.currentToken;
  }

  expect(type) {
    if (this.token.type === type) {
      this.currentToken = this.lexer.getToken();
      return true;
    } else {
      this.errors.report(this.token, `Expected ${type}, got ${this.token.type}`);
      return false;
    }
  }

  eat(type) {
    if (this.expect(type)) {
      return this.token;
    }
  }

  eatOptional(type) {
    if (this.currentToken.type === type) {
      this.currentToken = this.lexer.getToken();
      return this.currentToken;
    }
  }

  parseProgram() {
    let statements = [];
    while (this.currentToken.type !== Token.EOF) {
      statements.push(this.parseStatement());
    }
    return statements;
  }

  parseStatement() {
    if (this.expect(Token.KEYWORD_IF)) {
      return this.parseIfStatement();
    } else if (this.expect(Token.KEYWORD_WHILE)) {
      return this.parseWhileStatement();
    } else if (this.expect(Token.KEYWORD_FUNCTION)) {
      return this.parseFunctionDeclaration();
    } else {
      return this.parseExpressionStatement();
    }
  }

  parseIfStatement() {
    const condition = this.parseExpression();
    const thenBranch = this.parseStatement();
    let elseBranch = null;
    if (this.currentToken.type === Token.KEYWORD_ELSE) {
      this.currentToken = this.lexer.getToken();
      elseBranch = this.parseStatement();
    }
    return new ASTNode('IfStatement', [condition, thenBranch, elseBranch]);
  }

  parseWhileStatement() {
    const condition = this.parseExpression();
    const body = this.parseStatement();
    return new ASTNode('WhileStatement', [condition, body]);
  }

  parseFunctionDeclaration() {
    const name = this.eat(Token.IDENTIFIER);
    const params = this.parseParameterList();
    const body = this.parseBlockStatement();
    return new ASTNode('FunctionDeclaration', [name, params, body]);
  }

  parseExpression() {
    return this.parseBinaryExpression(0);
  }

  parseBinaryExpression(precedence) {
    let left = this.parseUnaryExpression();
    while (precedence < this.currentToken.precedence) {
      const operator = this.eat(this.currentToken.type);
      const right = this.parseUnaryExpression();
      left = new ASTNode('BinaryExpression', [left, operator, right]);
    }
    return left;
  }

  parseUnaryExpression() {
    if (this.currentToken.type === Token.UNARY_PLUS || this.currentToken.type === Token.UNARY_MINUS) {
      const operator = this.eat(this.currentToken.type);
      const operand = this.parsePrimaryExpression();
      return new ASTNode('UnaryExpression', [operator, operand]);
    } else {
      return this.parsePrimaryExpression();
    }
  }

  parsePrimaryExpression() {
    if (this.currentToken.type === Token.NUMBER) {
      const value = this.eat(Token.NUMBER).value;
      return new ASTNode('NumberLiteral', value);
    } else if (this.currentToken.type === Token.IDENTIFIER) {
      return this.eat(Token.IDENTIFIER);
    } else if (this.currentToken.type === Token.LEFT_PAREN) {
      const expression = this.parseExpression();
      this.eat(Token.RIGHT_PAREN);
      return expression;
    } else {
      this.errors.report(this.token, `Unexpected token ${this.token.type}`);
      return new ASTNode('Error');
    }
  }

  parseParameterList() {
    const params = [];
    while (this.currentToken.type !== Token.RIGHT_PAREN) {
      params.push(this.parseParameter());
      if (this.currentToken.type === Token.COMMA) {
        this.eat(Token.COMMA);
      }
    }
    this.eat(Token.RIGHT_PAREN);
    return params;
  }

  parseParameter() {
    const name = this.eat(Token.IDENTIFIER);
    return new ASTNode('Parameter', name);
  }

  parseBlockStatement() {
    const statements = [];
    while (this.currentToken.type !== Token.RIGHT_BRACE) {
      statements.push(this.parseStatement());
    }
    this.eat(Token.RIGHT_BRACE);
    return statements;
  }
}

export default Parser;
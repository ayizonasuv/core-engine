# utils.py

import logging
import os
import re
import shutil
from typing import Dict, List, Optional, Tuple, Union

logger = logging.getLogger(__name__)

def parse_csv_file(file_path: str) -> Dict[str, List[str]]:
    with open(file_path, 'r') as file:
        csv_data = [line.strip().split(',') for line in file.readlines()]
    return {key: value for key, value in zip(csv_data[0], csv_data[1:])}

def move_file(src_path: str, dst_path: str) -> None:
    try:
        shutil.move(src_path, dst_path)
    except shutil.Error as e:
        logger.error(f"Error moving file: {e}")

def validate_email(email: str) -> bool:
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return bool(re.match(pattern, email))

def get_user_home() -> str:
    return os.path.expanduser('~')

def get_current_directory() -> str:
    return os.getcwd()

def get_current_process_id() -> int:
    return os.getpid()

def get_current_thread_id() -> int:
    return threading.current_thread().ident
export const API_PATH = {
  user: {
    list: '/users',
    add: '/save/user',
    update: '/update/user',
    delete: '/delete/user',
    detail: '/user'
  }
}

export const OPERATION_CODE = {
  register: 1,
  update: 2
}

export function isURL(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

export const DEFAULT_PHOTO: string = 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg';

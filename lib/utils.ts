import { ClassValue, clsx } from 'clsx';
import ms from 'ms';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never';
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }

  return res.json();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return '0';
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, '$1') + item.symbol
    : '0';
}

export function capitalize(str: string) {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

const hideMobileListenerCallback = (
  keyboardEvent: globalThis.KeyboardEvent,
  element: HTMLElement
) => {
  const key = keyboardEvent.code || keyboardEvent.keyCode;
  if (key === 'Enter' || key === 13) {
    element.blur();
  }
};

export const addHideMobileKeyboardOnReturnListener = (element: HTMLElement) => {
  const listenerCallback = (keyboardEvent: globalThis.KeyboardEvent) =>
    hideMobileListenerCallback(keyboardEvent, element);

  element.addEventListener('keyup', listenerCallback);

  return listenerCallback;
};

export const clearMobileKeyboardListener = (
  element: HTMLElement,
  listenerCallback: (_keyboardEvent: globalThis.KeyboardEvent) => void
) => {
  element.removeEventListener('keyup', listenerCallback);
};

export const scrollToElement = (elID: string) => {
  const el = document.getElementById(elID);
  if (!el) return;

  window.scrollTo({
    top: el.offsetTop - 60,
    behavior: 'smooth',
  });
};

import * as React from "react";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  replace?: boolean;
  state?: unknown;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, children, replace: _replace, state: _state, ...rest }, ref) => (
    <a ref={ref} href={to} {...rest}>
      {children}
    </a>
  )
);
Link.displayName = "Link";

export const NavLink = Link;

export function useNavigate() {
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof window === "undefined") return;
    if (typeof to === "number") {
      window.history.go(to);
      return;
    }
    if (options?.replace) window.location.replace(to);
    else window.location.assign(to);
  };
}

export function useLocation() {
  if (typeof window === "undefined") {
    return { pathname: "/", search: "", hash: "", state: null, key: "default" };
  }
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: null,
    key: "default",
  };
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  if (typeof window === "undefined") return {} as T;
  const w = window as unknown as { __ASTRO_PARAMS__?: Record<string, string> };
  return (w.__ASTRO_PARAMS__ ?? {}) as T;
}

export function useSearchParams(): [URLSearchParams, (next: URLSearchParams) => void] {
  if (typeof window === "undefined") return [new URLSearchParams(), () => {}];
  const params = new URLSearchParams(window.location.search);
  const setParams = (next: URLSearchParams) => {
    const url = new URL(window.location.href);
    url.search = next.toString();
    window.history.replaceState(null, "", url.toString());
  };
  return [params, setParams];
}

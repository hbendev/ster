import cx from "classix";

/**
 * Ideally, since Tailwind is used for styling, the function should leverage tailwind-merge or a similar libary to merge classes.
 */
export default function mergeClasses(...classes: Parameters<typeof cx>) {
  return cx(...classes);
}

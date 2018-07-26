const toKebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

export const bemModifiers = (blockOrElementName, modifiers = {}) => {
  return [
    blockOrElementName,
    Object.entries(modifiers).reduce(
      (modifiers, [name, value]) => ({
        ...modifiers,
        [`${blockOrElementName}--${toKebabCase(name)}`]: !!value
      }),
      {}
    )
  ];
};

export function checkHeading(str) {
  return str.replace(/^\*+|\*+$/g, "");
}

export function replaceHeadingStarts(str) {
  return str.replace(/^(\*)(\*)|(\*)$/g, "").trim();
}


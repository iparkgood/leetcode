const licenseKeyFormatting = (s, k) => {
  let noDashes = s.replace(/[-]/g, "").toUpperCase().split("");

  for (let i = noDashes.length - k - 1; i >= 0; i -= k) {
    noDashes[i] += "-"
  }

  return noDashes.join("");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
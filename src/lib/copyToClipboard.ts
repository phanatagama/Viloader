export const copyToClipboard = async ({ url }: { url: string }) => {
  try {
    await navigator.clipboard.writeText(url);
    console.log("Copied to clipboard: ", url);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
export const openGoogleMaps = () => {
  const address = "701 N. Milwaukee Ave. Vernon Hills, IL 60061";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  window.open(googleMapsUrl, '_blank');
};

let visitorCount = 0;

export const getVisitorCount = () => {
  return visitorCount;
};

export const incrementVisitorCount = () => {
  visitorCount++;
  return visitorCount;
};

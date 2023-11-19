export const startDragging = (event, pinX, pinY, isDragging) => {
  isDragging.value = true;
  updatePinPosition(event, pinX, pinY);
};

export const handleDragging = (event, pinX, pinY, isDragging) => {
  if (isDragging.value) {
    updatePinPosition(event, pinX, pinY);
  }
};

export const stopDragging = (isDragging) => {
  isDragging.value = false;
};

export const updatePinPosition = (event, pinX, pinY) => {
  const rect = event.target.getBoundingClientRect();

  // Calcul des pourcentages
  const percentageX = ((event.clientX - rect.left) / rect.width) * 100;
  const percentageY = ((event.clientY - rect.top) / rect.height) * 100;

  pinX.value = percentageX;
  pinY.value = percentageY;
};



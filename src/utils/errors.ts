const handleError = (error: any): Error => {
  return new Error(error?.message || "An error occurred");
};

export { handleError };

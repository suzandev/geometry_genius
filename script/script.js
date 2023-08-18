document.getElementById("triangle_btn").addEventListener("click", function () {
  const triangleBase = document.getElementById("triangle_base");
  const triangleBaseValue = triangleBase.value;
  const triangleBaseString = parseFloat(triangleBaseValue);

  const triangleHeight = document.getElementById("triangle_height");
  const triangleHeightValue = triangleHeight.value;
  const triangleHeightString = parseFloat(triangleHeightValue);

  const triangleResult = 0.5 * triangleBaseString * triangleHeightString;

  const totalArea = document.getElementById("total_area");

  totalArea.innerText = triangleResult;
});

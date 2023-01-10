function cone(radius, height) {

    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);

    let formingThecone = Math.sqrt((Math.pow(height,2) + Math.pow(radius,2)));
    let areaOfSurroundingSurface = Math.PI * radius * formingThecone;
    let areaOftheBase = Math.PI*Math.pow(radius,2);
    let surfaceArea = areaOftheBase+areaOfSurroundingSurface;
    
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);

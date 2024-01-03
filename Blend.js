function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index within the array
        const j = Math.floor(Math.random() * (i + 1));

        // Swap values
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


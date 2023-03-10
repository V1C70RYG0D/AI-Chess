// Helper Functions for Chess Bot ====================================
// Fisher-Yates shuffle
export function shuffle(passed_in_array) {
    const array = passed_in_array.slice();
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}
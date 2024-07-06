/*
167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.


Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

*/

/*

Ваша задача - найти два числа в отсортированном массиве, которые в сумме дают определенное целевое число. 
Верните индексы этих двух чисел, увеличенных на один.

Вот шаги, которые мы будем следовать:

1. Используйте два указателя, один указывает на начало массива, а другой - на конец.
2. Если сумма двух чисел равна целевому числу, верните индексы этих чисел, увеличенных на один.
3. Если сумма меньше целевого числа, переместите указатель, указывающий на начало массива, вправо.
4. Если сумма больше целевого числа, переместите указатель, указывающий на конец массива, влево.
5. Повторяйте шаги 2-4, пока не найдете решение.

Your task is to find two numbers in a sorted array that add up to a specific target number. Return the indices of these two numbers, increased by one.

Here are the steps we will follow:

1. Use two pointers, one pointing at the start of the array, and the other at the end.
2. If the sum of the two numbers equals the target number, return the indices of these numbers, increased by one.
3. If the sum is less than the target number, move the pointer pointing at the start of the array to the right.
4. If the sum is greater than the target number, move the pointer pointing at the end of the array to the left.
5. Repeat steps 2-4 until you find a solution.

*/
function twoSum(numbers, target) {
    // Инициализируем два указателя
    // Initialize two pointers
    let left = 0;
    let right = numbers.length - 1;

    // Пока левый указатель меньше правого
    // While the left pointer is less than the right
    while (left < right) {
        // Вычисляем сумму двух чисел
        // Calculate the sum of the two numbers
        let sum = numbers[left] + numbers[right];

        // Если сумма равна целевому числу
        // If the sum equals the target number
        if (sum === target) {
            // Возвращаем индексы, увеличенные на один
            // Return the indices, increased by one
            return [left + 1, right + 1];
        } 
        // Если сумма меньше целевого числа
        // If the sum is less than the target number
        else if (sum < target) {
            // Перемещаем левый указатель вправо
            // Move the left pointer to the right
            left++;
        } 
        // Если сумма больше целевого числа
        // If the sum is greater than the target number
        else {
            // Перемещаем правый указатель влево
            // Move the right pointer to the left
            right--;
        }
    }

    // Возвращаем пустой массив, если решение не найдено
    // Return an empty array if no solution is found
    return [];
}

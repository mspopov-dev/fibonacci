import {Fibonacci} from '../model/fibonacci.js';
import {describe, test, expect} from '@jest/globals';

describe('fibonacci', () => {
    test('8 elements', () => {
        const fibonacci = new Fibonacci(8);
        expect([...fibonacci]).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });
    test('2 elements', () => {
        const fibonacci = new Fibonacci(2);
        expect([...fibonacci]).toEqual([1, 1]);
    });
    test('1 element', () => {
        const fibonacci = new Fibonacci(1);
        expect([...fibonacci]).toEqual([1]);
    });
    test('sum of 8 elements', () => {
        const fibonacci = new Fibonacci(8);
        let sum = 0;
        for (let num of fibonacci) {
            sum = sum + num;
        }
        expect(sum).toBe(54);
    });

});
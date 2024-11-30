import { describe, it, expect } from 'vitest';

describe('Math operations', () => {
    it('Debe sumar correctamente dos números', () => {
        const result = 2 + 2;
        expect(result).toBe(4);
    });
});

function getGreeting(name) {
    return `Hola, ${name}!`;
}


describe('getGreeting', () => {
    it('Debe devolver el saludo con el nombre proporcionado', () => {
        const result = getGreeting('Chepe');
        expect(result).toBe('Hola, Chepe!');
    });
});



describe('Object properties', () => {
    it('Debe contener las propiedades requeridas', () => {
        const user = { id: 1, name: 'Chepe', role: 'admin' };
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name', 'Chepe');
        expect(user).toHaveProperty('role');
    });
});


// jest.config.js
export const testEnvironment = 'jsdom';
export const transform = {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transform JSX and JavaScript files
};
export const moduleNameMapper = {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
};
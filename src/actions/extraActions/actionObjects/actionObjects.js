export const notify = (type, message) => ({
    type: 'notify',
    payload: { type, message }
});
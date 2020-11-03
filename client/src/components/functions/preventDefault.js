/**
 * to prevent defautl behaviour of forms. can be used for toher DOM
 * related events.
 * @param {Function} f function which will be called
 * @param {Event} event used to preventDefautl behaviour
 * @param  {...any} params any params passed to the function
 */
function preventDefaultFunction(f, event, ...params) {
    event.preventDefault();
    f(...params);
}

export default preventDefaultFunction;
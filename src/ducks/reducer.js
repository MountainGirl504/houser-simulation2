const initialState = {
    property_name: ''
    , property_description: ''
    , address: ''
    , city: ''
    , state: ''
    , zip:''
    , img_url:''
    , loan_amount: ''
    , monthly_mortgage: ''
    , desired_rent: ''
}

const SAVE_PROPERTY_NAME = 'SAVE_PROPERTY_NAME';
const SAVE_PROPERTY_DESCRIPTION = 'SAVE_PROPERTY_DESCRIPTION';
const SAVE_ADDRESS = 'SAVE_ADDRESS';
const SAVE_CITY = 'SAVE_CITY';
const SAVE_STATE = 'SAVE_STATE';
const SAVE_ZIP = 'SAVE_ZIP';
const IMAGE = 'IMAGE';
const LOAN_AMOUNT = 'LOAN_AMOUNT';
const MORTGAGE = 'MORTGAGE';
const RENT = 'RENT';

export default function reducer (state = initialState, action){
    console.log(action)
    switch(action.type) {
        case SAVE_PROPERTY_NAME:
        return Object.assign({}, state, {property_name:action.payload})

        case SAVE_PROPERTY_DESCRIPTION:
        return Object.assign({}, state, {property_description: action.payload})

        case SAVE_ADDRESS:
        return Object.assign({}, state, {address: action.payload})

        case SAVE_CITY:
        return Object.assign({}, state, {city: action.payload})

        case SAVE_STATE:
        return Object.assign({}, state, {state: action.payload})

        case SAVE_ZIP:
        return Object.assign({}, state, {zip: action.payload})

        case IMAGE: 
        return Object.assign({}, state, {img_url:action.payload})

        case LOAN_AMOUNT:
        return Object.assign({}, state, {loan_amount: action.payload})

        case MORTGAGE:
        return Object.assign({}, state, {monthly_mortgage: action.payload})

        case RENT:
        return Object.assign({}, state, {desired_rent:action.payload})

        default: return state;
    }
}

export function savePropertyName(propName){
    console.log("Hello!") //when typing, the console will print Hello
    return {
        type: SAVE_PROPERTY_NAME,
        payload: propName
    }
}
export function saveDescription(description) {
    console.log("Hi!")
    return{
        type: SAVE_PROPERTY_DESCRIPTION, 
        payload: description
    }
}
export function save_address(address){
    return {
        type: SAVE_ADDRESS,
        payload: address
    }
}
export function save_city (city){
    return{
        type: SAVE_CITY,
        payload: city
    }
}
export function save_state(state) {
    return {
        type: SAVE_STATE,
        payload: state
    }
}
export function save_zip(zip){
    return {
        type: SAVE_ZIP,
        payload: zip
    }
}
export function save_image(image){
    console.log(image)
    return {
        type: IMAGE,
        payload: image
    }
}
export function save_loan(loan){
    return {
        type: LOAN_AMOUNT, 
        payload: loan
    }
}
export function save_mortgage(mortgage){
    return {
        type:MORTGAGE,
        payload: mortgage
    }
}
export function desired_rent(rent){
    return {
        type: RENT,
        payload: rent
    }
}
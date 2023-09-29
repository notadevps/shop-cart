
const colorCheck = (filters) => {
    return filters.color.length > 0;
}

const genderCheck = (filters) => {
    return filters.gender.length > 0;
}

const typeCheck = (filters) => {
    return filters.type.length > 0 ; 
}

const validColor = (pr, filters) => {
    return pr.color.toLowerCase() === filters.color.toLowerCase();
}

const validGender = (pr, filters) => {
    return pr.gender.toLowerCase() === filters.gender.toLowerCase();
}

const validType = (pr, filters) => {
    return pr.type.toLowerCase() === filters.type.toLowerCase();
}

const prizeCheck = (filters) => {
    return filters.prize.length > 0;
}

const validPrice = (pr, filters) => {
    return (filters.prize[1] ? filters.prize[1] : 500 ) >= pr.price && pr.price > (filters.prize[0] ? filters.prize[0] : 0) ;
}

export const _filter = (setProducts, products, filters) => {
    let p = products; 
    console.log(filters);
    if (filters.color.length === 0 && filters.gender.length === 0 && filters.type.length === 0 && filters.prize.length === 0) {
        setProducts([...products]);
    } else {
        let k  = products.map(pr => {
            console.log('tin')
            if (!colorCheck(filters) && !genderCheck(filters) && !prizeCheck(filters) && !typeCheck(filters)) {
                console.log('no check');
                return pr; 
            } else if (colorCheck(filters) && genderCheck(filters) && prizeCheck(filters) && typeCheck(filters)) {
                if (validColor(pr, filters) && validGender(pr, filters) && validPrice(pr, filters) && validType(pr, filters)) {
                    console.log(pr);
                    return pr;
                }
            } else if (genderCheck(filters) && prizeCheck(filters) && typeCheck(filters)) {
                if (validGender(pr, filters) && validPrice(pr, filters) && validType(pr, filters)) {
                    return pr;
                }
            } else if (colorCheck(filters) && prizeCheck(filters) && typeCheck(filters)) {
                if (validColor(pr, filters) && validPrice(pr, filters) && validType(pr, filters)) {
                    return pr; 
                }
            }  else if (prizeCheck(filters) && colorCheck(filters) && genderCheck(filters)) {
                if (validPrice(pr, filters) && validColor(pr, filters) && validGender(pr, filters)) {
                    return pr; 
                }
            } else if (colorCheck(filters) && typeCheck(filters) && genderCheck(filters) ) {
                if (validColor(pr, filters) && validType(pr, filters) && validGender(pr, filters) ) {
                    return pr;
                } 
            } else if (prizeCheck(filters) && colorCheck(filters) || colorCheck(filters) && prizeCheck(filters)) {
                if (validPrice(pr, filters) && validColor(pr, filters)) {
                    return pr; 
                }

            } else if (prizeCheck(filters) && typeCheck(filters) || typeCheck(filters) && prizeCheck(filters)) {
                if (validPrice(pr, filters) && validType(pr, filters) || validType(pr, filters) && validPrice(pr, filters)) {
                    return pr;
                }
            }  else if (prizeCheck(filters) && genderCheck(filters) || genderCheck(filters) && prizeCheck(filters)) {
                if (validGender(pr, filters) && validPrice(pr, filters) || validPrice(pr, filters) && validGender(pr, filters)) {
                    return pr;
                }
            } else if (colorCheck(filters) && genderCheck(filters) || genderCheck(filters) && colorCheck(filters)) {
                if (validColor(pr, filters) && validGender(pr, filters)) {
                    return pr; 
                }
            } else if (genderCheck(filters) && typeCheck(filters) || typeCheck(filters) && genderCheck(filters) ) {
                if (validType(pr, filters) && validGender(pr, filters)) {
                    return pr;
                }
            } else if (colorCheck(filters) && typeCheck(filters) || typeCheck(filters) &&  colorCheck(filters)) {
                if (validColor(pr, filters) && validType(pr, filters)) {
                    return pr; 
                }
            } else if (colorCheck(filters) && !genderCheck(filters) && !typeCheck(filters) && !prizeCheck(filters)) {
                if (validColor(pr, filters)) { 
                    return pr; 
                }
            } else if (genderCheck(filters) && !colorCheck(filters) && !typeCheck(filters) && !prizeCheck(filters)) {
                if (validGender(pr, filters)) {
                    return pr; 
                }
            }  else if (typeCheck(filters) && !genderCheck(filters) && !colorCheck(filters) && !prizeCheck(filters)) {
                if (validType(pr, filters)) {
                    return pr;
                }
            } else if (prizeCheck(filters) && !genderCheck(filters) && !colorCheck(filters) && !typeCheck(filters)) {
                if (validPrice(pr, filters)) {
                    return pr;
                }
            }
        });

        console.log(k);
        setProducts([...k]);
    }
}


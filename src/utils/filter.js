
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

export const _filter = (setProducts, products, filters) => {
    let p = products; 
    console.log(filters);
    if (filters.color.length === 0 && filters.gender.length === 0 && filters.type.length === 0 && filters.prize.length === 0) {
        return products;
    } else {
        let k  = products.map(pr => {
            

            if (colorCheck(filters) && typeCheck(filters) && genderCheck(filters) ) {
                console.log('three filters')
                if (validColor(pr, filters) && validType(pr, filters) && validGender(pr, filters) ) {
                    return pr;
                } 
            } else if (colorCheck(filters) && genderCheck(filters) || genderCheck(filters) && colorCheck(filters)) {
                console.log('color gender')
                if (validColor(pr, filters) && validGender(pr, filters)) {
                    return pr; 
                }
            } else if (genderCheck(filters) && typeCheck(filters) || typeCheck(filters) && genderCheck(filters) ) {
                console.log('gender type ')
                if (validType(pr, filters) && validGender(pr, filters)) {
                    return pr;
                }
            } else if (colorCheck(filters) && typeCheck(filters) || typeCheck(filters) &&  colorCheck(filters)) {
                console.log('color type ')
                if (validColor(pr, filters) && validType(pr, filters)) {
                    return pr; 
                }
            } else if (colorCheck(filters) && !genderCheck(filters) && !typeCheck(filters)) {
                if (validColor(pr, filters)) { 
                    return pr; 
                }
            } else if (genderCheck(filters) && !colorCheck(filters) && !typeCheck(filters)) {
                if (validGender(pr, filters)) {
                    return pr; 
                }
            }  else if (typeCheck(filters) && !genderCheck(filters) && !colorCheck(filters)) {
                if (validType(pr, filters)) {
                    return pr;
                }
            }



        });

        console.log(k);
        setProducts([...k]);
    }
}


// Filter por nombre
export const namFilt = (data, term) => data.filter(({ name }) => name.toLowerCase().includes(term));

// Orden az za
export const alphabetOrder = (data, condition) => data.sort(() => (condition === 'z-a' ? -1 : -1));

// Filter por clases
export const roleFilter = (championsRol, choseFilter) => {
  const byFilter = championsRol.filter((obj) => {
    let filterResult = '';
    for (let i = 0; i < obj.tags.length; i += 1) {
      if (obj.tags[i] === choseFilter) {
        filterResult += obj.tags[i];
      }
    }
    return filterResult;
  });
  return byFilter;
};

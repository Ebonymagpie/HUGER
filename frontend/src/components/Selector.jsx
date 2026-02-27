function Selector({className, onChange}) {
    return ( 
        <select name="groups" id="selector" onChange={onChange} className={className}>
            <option value="All">همه</option>
            <option value="Physic">فیزیک</option>
            <option value="Chemistry">شیمی</option>
            <option value="Computer">کامپیوتر</option>
            <option value="Astronomy">نجوم</option>
        </select>
        );
}

export default Selector;
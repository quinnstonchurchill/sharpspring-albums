export default function shadows(level) {
    switch (level) {
        case 1:
            return `box-shadow: 0px 1.5px 8px rgba(0,0,0,0.07);`;
        case 2:
            return `box-shadow: 0px 2px 11px rgba(0,0,0,0.10);`;
        case 3:
            return `box-shadow: 0px 3px 16px rgba(0,0,0,0.12);`;
        case 4:
            return `box-shadow: 0px 4px 21px rgba(0,0,0,0.14);`;
        case 5:
            return `box-shadow: 0px 5px 25px rgba(0,0,0,0.14);`;
    }
}

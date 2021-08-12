export function formatInitialName(name:string) {
	const fullName = name;
    const separatedNames = fullName.split(' ')
    let letters = [];
    separatedNames.forEach((name, index)=>{
        if(name[index]!==undefined){
            letters.push(name.substr(0,1)) 
        }

    })
    
	return letters.toString().replace(/[^A-Z]/g, '');
}
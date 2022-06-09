function solve(input) {

let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
let total = 0;
let furniture = [];

while(input[0] != `Purchase`) {
    let line = input.shift();
    let match = pattern.exec(line);
    if ( match != null) {
        let {name, price, qty} = match.groups;
        price = Number(price);
        qty = Number(qty);
        total += price * qty;
        furniture.push(name);
    }
}
  console.log(`Bought furniture:`);
  if (furniture.length > 0) {
    console.log(furniture.join(`\n`));
  }
  
  console.log(`Total money spend: ${total.toFixed(2)}`);

}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])
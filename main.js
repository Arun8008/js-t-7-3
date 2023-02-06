/*--------3-------*/
const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

let name=users.map(function(user){
	return `${user.first_name} lives in ${user.last_name}`
})
document.write(name);
console.log(name);
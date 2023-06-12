import classes from "./LogementDetails.module.scss"

const LogementDetails = ( {logement}) => {
console.log("name: ", logement.title)
console.log("location: ", logement.location)
console.log("host name: ", logement.host.name)
console.log("host picture: ", logement.host.picture)
console.log("tags: ", logement.tags)
console.log("description: ", logement.description)
console.log("equipements: ", logement.equipments)
console.log("rating: ", logement.rating)

return (
    <div className={classes.Container}></div>
)

}

export default LogementDetails
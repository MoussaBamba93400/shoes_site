
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🔥`)
}

function PlantItem({ cover, name}) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			<span className='item_name'>{name}</span>
		</li>
	)
}

export default PlantItem
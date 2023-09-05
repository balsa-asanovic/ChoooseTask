import { useEffect, useState } from 'react';
import './App.css';
import Tile from './components/Tile';

interface TileData {
	id: number;
	title: string;
	subtitle: string;
	image: string;
	offset: number;
	rating: number;
  }

const App = () => {
	const [data, setData] = useState<TileData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/tiles');
			  	if (!response.ok) {
					throw new Error('Network response was not ok');
			  	}
			  	const jsonData = await response.json();
			  	setData(jsonData);
				console.log(jsonData);
			} catch (error) {
			  	console.error('Error fetching data:', error);
			}
		  }
	  
		fetchData();
	}, []);

	return (
		<div className="App">
			<div className="tile-container">
				{
					data.map((tileData, index) => {
						return <Tile 
									key={index} 
									title={tileData.title}
									subtitle={tileData.subtitle}
									image={tileData.image}
									offset={tileData.offset}
									rating={tileData.rating}
								/>
					})
				}
			</div>
		</div>
	);
}

export default App;

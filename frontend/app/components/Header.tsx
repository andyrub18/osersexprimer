import { HeartIcon, RectangleStackIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

const Header = () => {
	return (
		<div className="h-24 px-4 py-2 w-full bg-[#FFFBFB] rounded-b-lg">
			<div className="flex justify-between items-center h-full">
				<h3 className="text-[#CE44E4] text-[35px] max-w-[132px] leading-tight">
					Oser s'exprimer
				</h3>
				<ul className="flex gap-8">
					<li>
						<Link to="#">Acceuil</Link>
					</li>
					<li>
						<Link to="#">À propos</Link>
					</li>
					<li>
						<Link to="#">Contact</Link>
					</li>
					<li>
						<Link to="#">Blog</Link>
					</li>
				</ul>
				<div className="flex gap-4">
					<Link className="text-[20px]" to="#">
						Connexion
					</Link>
					<Link className="text-[20px]" to="#">
						Inscription
					</Link>
					<HeartIcon className="w-8" />
					<RectangleStackIcon className="w-8" />
				</div>
			</div>
		</div>
	);
};
export default Header;

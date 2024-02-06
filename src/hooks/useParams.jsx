import { useSearchParams } from "react-router-dom";

export const useParams = () => {
    const [menuSelected, setMenuSelected] = useSearchParams({ "menu-sel": 'n' });
    const isSelected = menuSelected.get("menu-sel") === 'y';
    return {
        isSelected, setSelected: (shouldBeSelected) => {
            setMenuSelected({ "menu-sel": shouldBeSelected ? 'y' : 'n' })
        }
    };
}
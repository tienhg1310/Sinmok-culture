import { useLocation } from "react-router";
import { useFindItemWithPath } from "../../../../Modules/hooks/useFindItemWithPath";
import { useState } from "react";

type Options = {
    [key: string]: any;
}
const useBoard = (options: Options) => {

    const route = useLocation();
    const { breadsrcumb, childrens } = useFindItemWithPath(route);

    const breadscrumbs = [
        breadsrcumb?.name || "",
        breadsrcumb?.child?.name || "",
    ];

    const childrenActive = childrens?.find(children => breadsrcumb?.child?.name === children.name);

    const options1 = ["전체"];
    const [selectedOption1, setSelectedOption1] = useState(options1[0]);
    const [selectedDropdown, setSelectedDropdown] = useState("");

    return {
        childrens,
        breadsrcumb,
        breadscrumbs,
        childrenActive,
        selectedDropdown,
        selectedOption1,
        setSelectedOption1,
        setSelectedDropdown
    }
}

export default useBoard;
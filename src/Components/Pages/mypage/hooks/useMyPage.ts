import { useLocation } from "react-router";
import { useFindItemWithPath } from "../../../../Modules/hooks/useFindItemWithPath";

type Options = {
    [key: string]: any;
}
const useMyPage = (options: Options) => {

    const route = useLocation();
    const { breadsrcumb, childrens } = useFindItemWithPath(route);

    const breadscrumbs = [
        breadsrcumb?.name || "",
        breadsrcumb?.child?.name || "",
    ];

    const childrenActive = childrens?.find(children => breadsrcumb?.child?.name === children.name);

    return {
        childrens,
        breadsrcumb,
        breadscrumbs,
        childrenActive,
    }
}

export default useMyPage;
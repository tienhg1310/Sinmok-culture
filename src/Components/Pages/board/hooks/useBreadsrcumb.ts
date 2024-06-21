import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Breadsrcumb, Options } from "../interface";


const useBreadsrcumb = (options: Options) => {

    const [breadcrumbs, setBreadcrumbs] = useState<Breadsrcumb[]>([]);
    const location = useLocation();

    const findItemWithPath = useCallback((location: any) => {
        const pathnames = location.pathname.split('/').filter((x: string) => x);
        const crumbs = pathnames.map((pathname: string, index: number) => {
            const url = `/${pathnames.slice(0, index + 1).join('/')}`;
            return { url, label: pathname.charAt(0).toUpperCase() + pathname.slice(1) };
        });

        if (location.pathname === '/') setBreadcrumbs([{ url: '/', label: 'Home' }]);
        else setBreadcrumbs([{ url: '/', label: 'Home' }, ...crumbs]);
    }, [location, setBreadcrumbs]);

    useEffect(() => {
        findItemWithPath(location);
        return () => setBreadcrumbs([]);
    }, [location, breadcrumbs, findItemWithPath]);


    return {
        breadsrcumb: breadcrumbs[1],
        childrens: breadcrumbs,
    }
}

export default useBreadsrcumb;
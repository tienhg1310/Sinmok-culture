import { useCallback, useState } from "react";

const useTab = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeVideo, setActiveVideo] = useState<string>('img');

    const handleActiveTab = useCallback((index: number) => {
        setActiveTab(index)
    }, [setActiveTab]);

    const handleActiveVideo = useCallback((video: string) => {
        setActiveVideo(video)
    }, [setActiveVideo]);

    return {
        activeTab,
        handleActiveTab,
        activeVideo,
        handleActiveVideo
    }
}

export default useTab;
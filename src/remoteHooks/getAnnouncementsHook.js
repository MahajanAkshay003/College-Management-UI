import React, { useState, useEffect } from 'react';
import {getAnnouncements} from "../remoteMethods/Announcement/announcement";

const useGetAnnouncementsHook = (id, userType) => {
    const [ announcements, setAnnouncements ] = useState([]);
    useEffect(() => {
        getAnnouncements(id, userType).then(announcements => {
            setAnnouncements(announcements);
        }).catch(error => {
            setAnnouncements([]);
        })
    }, []);
    return announcements;
}

export default useGetAnnouncementsHook;
import React from "react";
import { Eye, FileStack, FileText, Users } from "lucide-react";
import StatisticsCard from "./StatisticsCard";
import RecentPostList from "./RecentPostList";

const statisticsArr = [
    {
        title: "Total Published Blogs", 
        statistics: 5,
        icon: <FileStack className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: "Total Drafted Blogs", 
        statistics: 5,
        icon: <FileText className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: "Views", 
        statistics: 5,
        icon: <Eye className="h-4 w-4 text-muted-foreground" />
    },
    {
        title: "Followers", 
        statistics: 5,
        icon: <Users className="h-4 w-4 text-muted-foreground" />
    },
]

export default function WriterDashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-4">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {statisticsArr.map((stats, idx)=>{
            return (<StatisticsCard key={idx} title={stats.title} statistics={stats.statistics} icon={stats.icon} index={idx} />)
        })}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        <RecentPostList type="published" title="Published Post" description="Last 5 published blog post." viewMoreLink="/dashboard/manage-blogs" chunkNo="4" />
        <RecentPostList type="draft" title="Draft Post" description="List of your saved drafts, not yet published." viewMoreLink="/dashboard/my-drafts" chunkNo="5" />
      </div>
    </main>
  );
}

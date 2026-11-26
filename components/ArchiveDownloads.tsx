import {Download} from 'lucide-react';
import collections from '../data/archives.json';

function fileSize(bytes: number) {
  return bytes >= 1e9 ? `${(bytes / 1e9).toFixed(2)} GB` : `${Math.round(bytes / 1e6)} MB`;
}

export default function ArchiveDownloads() {
  return <div className="archive-downloads">{collections.map(collection => {
    const totalBytes = collection.videos.reduce((total, video) => total + video.sizeBytes, 0);
    return <article className="archive-download" key={collection.id}>
      <img className="archive-cover" src={collection.cover} alt={`${collection.school} campus`} loading="lazy" />
      <div className="archive-description">
        <h3>{collection.school}</h3>
        <p>{collection.description}</p>
        <p className="archive-details">{collection.videos.length} videos / {fileSize(totalBytes)} total / MP4</p>
        <ul className="campus-video-list" aria-label={`${collection.shortName} video downloads`}>
          {collection.videos.map(video => <li key={video.id}>
            <div className="campus-video-info"><h4>{video.title}</h4><span>{fileSize(video.sizeBytes)} · MP4</span></div>
            {video.downloadUrl ? <a className="video-download-link" href={video.downloadUrl} download={video.filename} aria-label={`Download ${collection.shortName}: ${video.title}`}><Download size={18} aria-hidden="true"/><span>Download</span></a> : <span className="video-download-pending">Preparing download</span>}
          </li>)}
        </ul>
      </div>
    </article>;
  })}</div>;
}

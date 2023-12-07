import { Component, OnInit } from '@angular/core';
import { PlaylistDetails } from 'src/app/models/playlist-details';
import { PlaylistVideoDetails } from 'src/app/models/playlist-video-details';
import { PlaylistDownloaderService } from 'src/app/services/playlist-downloader/playlist-downloader.service';

@Component({
  selector: 'app-playlist-search-page',
  templateUrl: './playlist-search-page.component.html',
  styleUrls: ['./playlist-search-page.component.css']
})
export class PlaylistSearchPageComponent implements OnInit {
  playlistVideoDetails!: PlaylistVideoDetails[];
  details!: PlaylistDetails;
  playlistUrl: string = '';
  showTable: boolean = false;
  navbarActive: boolean = false;

  constructor(private playlistDownloaderService: PlaylistDownloaderService) {}

  fetchVideoData(): void {
    this.playlistDownloaderService.getPlaylistData(this.playlistUrl).subscribe(
      (data) => {
        this.playlistVideoDetails = data.playlistVideoDetails;
        this.details = data.playlistDetails;
        this.showTable = true;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.navbarActive = true;
  }
}
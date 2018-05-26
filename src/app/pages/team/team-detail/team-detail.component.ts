import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, formatDate } from '@angular/common';
import { TeamService, UploadService } from '../../../services';
import { LoginComponent } from '../..';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  @Input() logoImage: any;
  fileToUpload: File = null;

  constructor(private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location,
    private router: Router,
    private fileUploadService: UploadService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.teamService.getTeam(id)
        .subscribe((t) => {
          this.team = t;
        }, (err) => {
          console.error(err);
        });
    } else {
      this.team = { name: '', logoImage: '' }
    }
  }

  saveEditTeam(): void {
    if (!this.team.id) {
      this.teamService.addTeam(this.team)
        .subscribe((t) => {
          // do nothing
        });
    } else {
      this.teamService.updateTeam(this.team)
        .subscribe((t) => {
          console.log(t);
          //this.router.navigate(['teams']);
          //do nothing
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    if (!this.fileToUpload)
    {
      this.saveEditTeam();
    }

    const formData = new FormData();
    formData.append(this.fileToUpload.name, this.fileToUpload);
    this.fileUploadService.upload(formData).subscribe(data => {
      this.team.logoImage = data.toString();
      this.saveEditTeam();
    }, error => {
      console.log(error);
    });
  }

  getImage(name: any): any{
    return this.fileUploadService.getImage(name).subscribe(data => { return data; });
  }
}

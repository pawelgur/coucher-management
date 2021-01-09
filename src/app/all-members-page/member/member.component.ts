import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Member, Tree} from "../../models";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent implements OnInit {

  @Input("member") memberNode!: Tree<Member>;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(member: Tree<Member>) {
    return member.node.id;
  }

}

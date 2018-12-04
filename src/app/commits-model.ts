export class User {
    public login: string;
    public avatar_url: string;
}

export class Author extends User {

}

export class Committer extends User {

}

export class Commit {
    public author: Author;
    public committer: Committer;
    public message: string;
}


export class CommitsModel {
    public sha: string;
    public node_id: string;
    public commit: Commit;
    public url: string;
    public html_url: string;
    public comments_url: string;
    public author: Author;
    public committer: Committer;
}

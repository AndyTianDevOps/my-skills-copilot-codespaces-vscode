function skillsMember() {
    return {
        restrick: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindTonController: true,
        scope: {
            member: '='
        }
    }
}
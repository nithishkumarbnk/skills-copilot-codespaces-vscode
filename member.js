function skillsMember() {
    return {
        name: 'skills-member',
        template: `
            <div class="skills-member">
                <div class="skills-member__avatar">
                    <img :src="member.avatar" alt="Avatar">
                </div>
                <div class="skills-member__info">
                    <h3>{{ member.name }}</h3>
                    <p>{{ member.role }}</p>
                </div>
            </div>
        `,
        props: {
            member: {
                type: Object,
                required: true
            }
        }
    };
}
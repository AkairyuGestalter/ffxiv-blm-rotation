export const SkillName = 
{
    Blizzard: "Blizzard",
    Fire: "Fire",
	Fire3: "Fire3",
	Transpose: "Transpose"
};

class SkillInstance
{
	// timeTillAvailableFn : GameState -> float
	// available : GameState -> bool
	// effectFn : GameState -> ()
	constructor(description, requirementFn, effectFn)
	{
        this.description = description;
		this.available = requirementFn;
		this.use = effectFn;
	}
};

class Skill
{
	// instances : SkilInstance[]
	constructor(name, timeTillAvailableFn, instances)
	{
		this.name = name;
        this.timeTillAvailable = timeTillAvailableFn;
		this.instances = instances;
	}
};

class SkillsList extends Map
{
    constructor(game)
    {
        super();
        this.game = game;
    }
};

export function makeSkillsList(game)
{
    var skillsList = new SkillsList(game);

    // Blizzard
    skillsList.set(SkillName.Blizzard, new Skill(
        SkillName.Blizzard,
        game.timeTillNextGCDAvailable, [
        new SkillInstance(
            "not in AF or UI",
            g=>{
                return g.getFireStacks() == 0 &&
                g.getIceStacks() == 0 &&
                g.getMP() >= 400;
            },
            g=>{
                g.castGCDSpell(2.5, 0.1, 180, 400);
            }
        )
    ]));

    return skillsList;
}

/*
skills.set(SkillID.Fire3, new Skill(SkillID.Fire3,
	[
		// case 1: has umbral ice
		new SkillInstance(
			g=>{ // time till available
				return Math.max(g.timeTillNextSkillAvailable(), gcd - g.resources.get(ResourceType.GCD).currentValue);
			},
			g=>{ // requirement: has umbral ice
				return g.resources.get(ResourceType.UmbralIce).currentValue > 0;
			},
			g=>{ // effect
				// TODO
				// queue damage; remove UI, apply AF3, add 1/2 cast time + caster lock, refresh GCD timer
			}
		),
		// case 2: hard-casted F3
		new SkillInstance(
			g=>{
				return Math.max(g.timeTillNextSkillAvailable(), gcd - g.resources.get(ResourceType.GCD).currentValue);
			},
			g=>{
				return g.resources.get(ResourceType.Mana).available(2000);
			},
			g=>{
				// TODO
			}
		),
	]
));
*/
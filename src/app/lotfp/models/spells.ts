export class LotfpSpell {
    name: string;
    level: number;
}

export class LotfpSpellDetails extends LotfpSpell {
    range?: string;
    duration?: string;
    description?: string;
    page?: number;
}


export const clericSpells: LotfpSpellDetails[] = [
    { name: 'Bless', level: 1, description: '' },
    { name: 'Command', level: 1, description: '' },
    { name: 'Cure light wounds', level: 1, description: '' },
    { name: 'Detect evil', level: 1, description: '' },
    { name: 'Invisibility to undead', level: 1, description: '' },
    { name: 'Protection from evil', level: 1, description: '' },
    { name: 'Purify food & drink', level: 1, description: '' },
    { name: 'Remove fear', level: 1, description: '' },
    { name: 'Sanctuary', level: 1, description: '' },
    { name: 'Turn undead', level: 1, description: '' },

    { name: 'Augury', level: 2, description: '' },
    { name: 'Delay poison', level: 2, description: '' },
    { name: 'Enthrall', level: 2, description: '' },
    { name: 'Heat metal', level: 2, description: '' },
    { name: 'Heroism', level: 2, description: '' },
    { name: 'Resist cold', level: 2, description: '' },
    { name: 'Resist fire', level: 2, description: '' },
    { name: 'Silence (15\' radius)', level: 2, description: '' },

    { name: 'Cure disease', level: 3, description: '' },
    { name: 'Dispel magic', level: 3, description: '' },
    { name: 'Magic vestments', level: 3, description: '' },
    { name: 'Remove curse', level: 3, description: '' },
    { name: 'Sacrifice', level: 3, description: '' },
    { name: 'Water walk', level: 3, description: '' },

    { name: 'Cure serious wounds', level: 4, description: '' },
    { name: 'Detect lie', level: 4, description: '' },
    { name: 'Divinaton', level: 4, description: '' },
    { name: 'Neutralize Poison', level: 4, description: '' },
    { name: 'Protection from evil (10\' radius)', level: 4, description: '' },
    { name: 'Spell immunity', level: 4, description: '' },

    { name: 'Commune', level: 5, description: '' },
    { name: 'Cure critical wounds', level: 5, description: '' },
    { name: 'Dispel evil', level: 5, description: '' },
    { name: 'Insect plague', level: 5, description: '' },
    { name: 'Quest', level: 5, description: '' },
    { name: 'True seeing', level: 5, description: '' },

    { name: 'Anti-magic shell', level: 6, description: '' },
    { name: 'Find the path', level: 6, description: '' },
    { name: 'Forbiddance', level: 6, description: '' },
    { name: 'Heal', level: 6, description: '' },
    { name: 'Tongues', level: 6, description: '' },
    { name: 'Word of recall', level: 6, description: '' },

    { name: 'Control the weather', level: 7, description: '' },
    { name: 'Earthquake', level: 7, description: '' },
    { name: 'Holy word', level: 7, description: '' },
    { name: 'Part water', level: 7, description: '' }
];

export const magicUserSpells: LotfpSpellDetails[] = [

    // Level 1
    { name: 'Bookspeak', level: 1, page: 92, duration: '1 round/level', range: 'touch', description: 'When the subject of this spell touches a book, it animates, forming a mouth around the edge where the paper shows. The subject can ask the book one question per Round, and if the information is contained within the book, it will answer. If anyone else approaches or asks questions the book snaps and growls that Round instead of answering a question. Intelligent books can save to resist the spell (as a Magic-User of a level equal to the author). Magical books do not impart their effect when they answer. The spell is a shortcut to actually reading a book, and it will not give more information than a careful reading would.' },
    { name: 'Charm Person', level: 1, page: 93, duration: 'See details', range: '120\'', description: '<p>The Charm Person spell makes a single subject utterly enamored with the caster and desperate to please him if the saving throw versus Magic is failed. This is not mind control, as the subject retains his personality and controls how he acts but for his utter fascination with the caster. The caster must articulate his desires if he expects the subject to fulfill them.</p> <p>Any request which is not against the subject’s interests or personality will be followed. Any request which is against the subject’s interests or personality triggers a saving throw to refuse the request. If the saving throw is successful, the request will be refused, but this will not break the Charm. If as part of a request, the caster promises the subject something that the subject is normally inclined to want, then this saving throw is not necessary, and the subject will comply.</p> <p>This spell works on all humans and human-like creatures (except Elves); other (non player character class) humanoids are not affected if they have more than four Hit Dice. Abuse or neglect of the subject will trigger another saving throw to negate the Charm, and murderous violence towards the subject also triggers a save, but with a +5 bonus to the roll. The subject, if intelligent, will realize that he has been victim to mesmerism, and retain full memory of his actions while under the Charm after the spell ends.</p>' },
    { name: 'Comprehend Languages', level: 1, page: 95, duration: '1 turn/level', range: '0', description: '<p>The caster can understand the spoken words of creatures or read otherwise incomprehensible written messages by summoning the spirits of the all-knowing dead to translate for him. The creature or the writing must be touched by the caster before the spirits can deliver any translation. The ability to read does not necessarily impart insight into the material, merely its literal meaning. The spell enables the caster to understand or read an unknown language, not speak or write it.</p> <p><i>Obscure Languages</i>, the opposite of <i>Comprehend Languages</i>, dispels the effects of <i>Comprehend Languages</i>, or can be used to make spoken or written language incomprehensible by summoning spirits to possess the lips of a speaker, or the eyes of a reader, ruining all chances of communication.</p>' },
    { name: 'Detect Magic', level: 1, page: 100, duration: 'Instantaneous', range: 'Line of sight', description: '<p>This spell allows the caster to know if anything within his field of vision (or on his person) is in any way magical. This includes magical creatures, magical items, or any creature or object under the effect of an ongoing spell. Spellcasters such as Magic-Users and Elves do not detect as magic with this spell, but anyone that is under the effects of an active spell does.</p> <p>The spell does not identify the nature of the magic, only that magic is present.</p> <p>The caster must already be able to see the object in question in order to detect it as magical. Concealed, covered, or invisible objects will not be revealed by this spell.</p>' },
    { name: 'Enlarge', level: 1, page: 102, duration: '1 Turn/level', range: '5\'/level', description: '<p>The forces of magic do not recognize the relationships of size and distance between things; it is the limitations of the mind&rsquo;s ability to master magic that results in strictures such as &ldquo;spell range,&rdquo; but sometimes the infinite nature of magic can be applied to material objects. This spell causes instant growth (and corresponding increase in weight and damage done) of a single object or creature that is in visible range. This increase changes a creature&rsquo;s size by 20% per caster level, up to three times the original size of the creature. The effectiveness of this spell is half of this on non-living objects, which are only enlarged 10% per level and to a maximum of double the original size of the object. The caster can affect a 10\' cube of living matter per level or a 5\' cube per level of non-living matter.</p><p>Magical item properties are not affected by this spell. For instance, a wand will have the same function even though it is increased to the size of a staff, and potion dosages are not increased, though they may take longer to drink. Objects do become stronger or heavier, so that a small rock gains the weight of an appropriately sized larger one, and a person enlarged will have a strength appropriate to his size (as an ogre or a giant, for example) with corresponding strength adjustments.</p><p>The damage done by an Enlarged character during m&ecirc;l&eacute;e is increased by the same percentage as his size.</p><p>The reverse of Enlarge, Reduce, can reduce objects or creatures in size by the same proportions as Enlarge. These spells cancel each other out. For either version of the spell a saving throw versus Magic is allowed to negate the effect. This save can be forfeited if the recipient desires.</p>' },
    { name: 'Faerie Fire', level: 1, page: 103, duration: '2 Rounds/level', range: '80\'', description: '<p>A pale glow surrounds and outlines the subjects, making them hypervisible. Outlined subjects shed light that makes them visible in darkness at a distance of 80\', or half this if the creatures are near a light source. The Magic-User can affect creatures within a 40\' radius, and may outline up to one human-sized creature per caster level. The Faerie Fire can be blue, green, or violet, according to the Magic-User&rsquo;s choice at the time of casting. The Faerie Fire does not cause any harm to the objects or creatures thus outlined. However, their greater visibility grants attackers a +2 bonus to hit them while the spell is in effect.</p>' },
    { name: 'Feather Fall', level: 1, page: 104, duration: 'See details', range: '10\'/level', description: '<p>The affected creatures or objects in range fall slowly. Feather Fall instantly changes the rate at which the targets fall to that of a feather (about 5\' per Round), and the subjects take no damage upon landing while the spell is in effect. The spell ends immediately when the subject stops falling.</p><p>The spell can affect one or more objects or creatures, including gear and carried objects up to each creature&rsquo;s maximum encumbrance. The maximum volume is a 10\' cube, and 200 pounds + 200 pounds per level can also be affected, such that a 1st level Magic-User can affect 400 pounds.</p><p>The spell can be cast with an instant utterance, quickly enough to save the caster or another creature if he unexpectedly falls, but Initiative, if appropriate, must be on the side of the caster. The spell can be cast on falling items or creatures and missiles, but is ineffective against creatures firmly on the ground or flying. No saving throw is permitted.</p>' },
    { name: 'Floating Disc', level: 1, page: 105, duration: '6 Turns', range: '20\'', description: '<p>The caster creates a slightly concave, circular plane of force that follows him about and carries a heavy load for him. The disk is 3 feet in diameter and 1 inch deep at its center. It can hold 500 pounds. If used to transport a liquid, its capacity is 2 gallons. The disk floats approximately 3 feet above the ground at all times and remains level. It floats along horizontally within spell range and will accompany the caster with an equal movement rate. If not otherwise directed, it maintains a constant interval of 6\' between itself and the caster, and will follow the caster without prompting to maintain a minimum of 6\' distance. When the disk winks out at the end of the spell&rsquo;s duration, whatever it was supporting falls to the surface beneath it.</p>' },
    { name: 'Hold Portal', level: 1, page: 109, duration: '2d6 Turns', range: '10\'', description: '<p>This spell magically holds shut a door, gate, window, or shutter of wood, metal, or stone. The magic affects the portal just as if it were securely closed and normally locked. A Knock spell or a successful Dispel Magic spell can negate a Hold Portal spell.</p>' },
    { name: 'Identify', level: 1, page: 110, duration: 'Instantaneous', range: 'Touch', description: '<p>This spell allows the Magic-User to discern the magical properties of an item. The spell requires one uninterrupted day in a laboratory worth at least 1,000 sp to cast. At the end of the day, the Magic- User will have successfully determined one magical property of an item. The character will not know if there are additional properties unless he casts Identify again and another magical property of the item is determined. He will only know all of the magical properties of an item when he casts the spell and no new property is identified; both the &ldquo;wasted&rdquo; day and the &ldquo;wasted&rdquo; casting of Identify confirming that the item has no further properties. Note that a cursed item will not be identified as cursed, but as the item it pretends to be. This spell does not reveal command words. Each casting of the spell, successful or not, requires the expenditure of 100 sp worth of ingredients.</p>' },
    { name: 'Light', level: 1, page: 113, duration: '3 Turns/level', range: '120\'', description: '<p>This spell creates a light source equivalent to that of a torch in the target area of the spell. The effect is immobile if cast on an area, but if cast on an object it moves with the object. Once cast, the caster has no control over the light, but can end the spell if he so wishes. If cast on a person or on the equipment of a person who does not wish to be the target of the spell, that person is allowed a saving throw versus Magic; success means that the spell is cast on the area the person is in, but not on a particular object.</p><p>The light caused by the spell emits no heat, nor can it be extinguished by water or high winds. The source of the light can be covered, which will block the light, but this will not end the spell.</p><p>Darkness, the reverse of the spell causes an area to be covered in total darkness; even creatures able to see in the dark are blind here.</p><p>The spell can be targeted at a creature&rsquo;s eyes specifically to blind it, assuming it has eyes in close proximity to one another. The target gets a saving throw versus Magic. If successful, the spell fails to work at all.</p>' },
    { name: 'Magic Aura', level: 1, page: 114, duration: 'Permanent', range: 'Touch', description: '<p>This spell makes an object appealing to the microcosmic forces of magic, giving the item an aura that causes it to register to Detect spells (and spells with similar capabilities) as though it were magical. If the object bearing Magic Aura is physically examined (touched), the examiner recognizes that the aura is false if he succeeds in a saving throw versus Magic. Otherwise, he believes the aura, but no amount of testing reveals what the true magic is.</p><p>The reverse of this spell, <i>Obscure Aura</i>, hides the magic aura of a legitimate magical item. A Magic- User casting <i>Detect Magic</i> and actually handling the item is permitted a saving throw versus Magic to see the magical aura of the item.</p>' },
    { name: 'Magic Missile', level: 1, page: 115, duration: 'Instantaneous', range: '60\'+10\'/level', description: '<p>A missile of magical energy shoots forth from the caster&rsquo;s fingertip and strikes its target, dealing damage equal to 1d4 per level of the caster (so a second level Magic-User deals 2d4 points of damage). The missile strikes unerringly, even if the target is in m&ecirc;l&eacute;e combat or has less than total cover or total concealment. Specific parts of a creature cannot be singled out.</p><p>The caster can throw the full force of the missile at a single target, but if the caster is 2nd level or higher, he can choose to divide the dice of damage between targets as he wishes. Dice must be assigned to targets before any damage is rolled, and targets of these divided dice are allowed a saving throw versus Magic, with success meaning that the target takes half damage.</p><p>Each Magic-User&rsquo;s <i>Magic Missile</i> is unique in appearance and always looks the same. When the caster writes a scroll, the resulting Missile looks identical to the normally cast version. When using a scroll written by another Magic-User, or memorizing a spell out of another&rsquo;s spellbook, the resulting spell will look like that other caster&rsquo;s <i>Missile</i>. Each different &lsquo;signature&rsquo; for a Magic Missile must be researched and/or transcribed as if it were a different spell.</p>' },
    { name: 'Mending', level: 1, page: 116, duration: 'Instantaneous', range: '30\'', description: '<p><i>Mending</i> repairs small breaks or tears in objects. It will weld broken metallic objects such as a ring, a chain link, a medallion, or a slender dagger, providing but one break exists. Ceramic or wooden objects with multiple breaks can be invisibly rejoined to be as strong as new. A hole in a leather sack or a wineskin is completely healed over by Mending. The spell cannot repair magic items, nor does it affect creatures.</p>' },
    { name: 'Message', level: 1, page: 116, duration: 'Instantaneous', range: '60\'+10\'/level', description: '<p>This spell grants the caster the ability to whisper messages and receive whispered replies. The caster points his finger at a creature he wants to receive the message. The target must be in direct line of sight, with no barrier. The whispered message is audible only to the target. The creature that receives the message can whisper a reply that the caster can hear. The spell transmits sound, not meaning. It does not transcend language barriers. Unlike casting most spells, the gestures of this spell are subtle, and it is easy to conceal that the spell is being cast.</p>' },
    { name: 'Shield', level: 1, page: 128, duration: '2 Turns', range: 'Touch', description: '<p>Magic-Users are masters of matter and as such can command objects racing towards them to stop. The objects are sometimes impertinent, it is true, but this spell will protect the caster from many attacks which would otherwise harm him. Against missile attacks, the spell grants the caster AC 19, and an effective AC 17 for all other attacks. Even if an attack hits, it does one less point of damage than it otherwise would have.</p>' },
    { name: 'Sleep', level: 1, page: 129, duration: '1d4 Turns', range: '30\'+10\'/level', description: '<p>A <i>Sleep</i> spell causes a magical slumber to come upon creatures with 4+1 or fewer Hit Dice. The caster can only affect 1 creature if it has 4+1 or more Hit Dice, but the spell will otherwise affect creatures totaling no more than 2d8 Hit Dice. Calculate monsters with less than 1 Hit Die as having 1 Hit Die, and monsters with a bonus to their Hit Dice as having the flat amount. For example, a 3+2 Hit Die monster would be calculated as having 3 Hit Dice. Excess Hit Dice that are not sufficient to affect a creature are wasted. Creatures with the fewest Hit Dice are affected first. Slapping or wounding awakens an affected creature, but normal noise does not. Sleep does not affect undead, constructs, or other magical or unnatural creatures (such as Elves).</p>' },
    { name: 'Spider Climb', level: 1, page: 131, duration: '1 Round + 1 Round/level', range: 'Touch', description: '<p>The subject can climb and travel on vertical surfaces or even traverse ceilings as a spider does. The affected creature must have its hands and feet free to climb in this manner. Any objects weighing less than 5 pounds cling to the spell recipient&rsquo;s hands and feet. This spell can be used on another being (touch required) with no saving throw.</p>' },
    { name: 'Summon', level: 1, page: 134, duration: 'See details', range: '10\'', description: '<p>Magic fundamentally works by ripping a hole in the fabric of space and time and pulling out energy that interacts with and warps our reality. Various mages have managed to consistently capture specific energy in exact amounts to produce replicable results: Spells.</p><p>The Summon spell opens the rift between the worlds a little bit more and forces an inhabitant From Beyond into our world to do the Magic-User\'s bidding. What exactly comes through the tear, and whether or not it will do what the summoner wishes, is wholly unpredictable.</p><p>Once the Summon spell is cast, there are a number of steps to resolve:</p><ul><li>The caster chooses the intended Power of the Summoned Entity</li><li>The caster makes a saving throw versus Magic</li><li>Determine the Entity&rsquo;s Form</li><li>Determine the Entity&rsquo;s Powers</li><li>Resolve the Domination Roll</li></ul></p><p>See book for details</p>' },
    { name: 'Unseen Servant', level: 1, page: 148, duration: '6 Turns + 1 turn/level', range: '0\'', description: '<p>An <i>Unseen Servant</i> is an invisible, mindless, shapeless force that performs simple tasks at the caster&rsquo;s command. It can run and fetch things, open unstuck doors, and hold chairs, as well as clean and mend. It can open only normal doors, drawers, lids, and the like. It can lift 20 pounds or drag 40 pounds. The Servant cannot attack in any way, and it cannot be killed because it is a magical force, not a living thing.</p>' },

    // Level 2
    { name: 'Audible Glamour', level: 2, description: '' },
    { name: 'Change Self', level: 2, description: '' },
    { name: 'Detect Invisible', level: 2, description: '' },
    { name: 'ESP', level: 2, description: '' },
    { name: 'Force of Forbidment', level: 2, description: '' },
    { name: 'Forget', level: 2, description: '' },
    { name: 'Invisibility', level: 2, description: '' },
    { name: 'Knock', level: 2, description: '' },
    { name: 'Levitate', level: 2, description: '' },
    { name: 'Light, Continual', level: 2, description: '' },
    { name: 'Locate Object', level: 2, description: '' },
    { name: 'Magic Mouth', level: 2, description: '' },
    { name: 'Mirror Image', level: 2, description: '' },
    { name: 'Phantasmal Force', level: 2, description: '' },
    { name: 'Ray of Enfeeblement', level: 2, description: '' },
    { name: 'Speak with Animals', level: 2, description: '' },
    { name: 'Stinking Cloud', level: 2, description: '' },
    { name: 'Wall of Fog', level: 2, description: '' },
    { name: 'Web', level: 2, description: '' },
    { name: 'Wizard Lock', level: 2, description: '' },

    // Level 3
    { name: 'Army of One', level: 3, description: '' },
    { name: 'Clairvoyance', level: 3, description: '' },
    { name: 'Detect Illusion', level: 3, description: '' },
    { name: 'Dispel Magic', level: 3, description: '' },
    { name: 'Explosive Runes', level: 3, description: '' },
    { name: 'False Alignment', level: 3, description: '' },
    { name: 'Fly', level: 3, description: '' },
    { name: 'Gaseous Form', level: 3, description: '' },
    { name: 'Gust of Wind', level: 3, description: '' },
    { name: 'Haste', level: 3, description: '' },
    { name: 'Hold Person', level: 3, description: '' },
    { name: 'Howl of the Moon', level: 3, description: '' },
    { name: 'Invisibility 10\' Radius', level: 3, description: '' },
    { name: 'Phantasmal Psychedelia', level: 3, description: '' },
    { name: 'Protection from Normal Missiles', level: 3, description: '' },
    { name: 'Secret Page', level: 3, description: '' },
    { name: 'Speak with Dead', level: 3, description: '' },
    { name: 'Strange Waters II', level: 3, description: '' },
    { name: 'Suggestion', level: 3, description: '' },
    { name: 'Water Breathing', level: 3, description: '' },

    // Level 4
    { name: 'Charm Monster', level: 4, description: '' },
    { name: 'Confusion', level: 4, description: '' },
    { name: 'Creation, Minor', level: 4, description: '' },
    { name: 'Dig', level: 4, description: '' },
    { name: 'Dimension Door', level: 4, description: '' },
    { name: 'Extension', level: 4, description: '' },
    { name: 'Globe of Invulnerability, Minor', level: 4, description: '' },
    { name: 'Hallucinatory Terrain', level: 4, description: '' },
    { name: 'Invisibility, Improved', level: 4, description: '' },
    { name: 'Mnemonic Enhancer', level: 4, description: '' },
    { name: 'Plant Growth', level: 4, description: '' },
    { name: 'Polymorph Others', level: 4, description: '' },
    { name: 'Polymorph Self', level: 4, description: '' },
    { name: 'Protection from Normal Weapons', level: 4, description: '' },
    { name: 'Seven Gates', level: 4, description: '' },
    { name: 'Shadow Monsters', level: 4, description: '' },
    { name: 'Speak with Plants', level: 4, description: '' },
    { name: 'Wall of Fire', level: 4, description: '' },
    { name: 'Wall of Ice', level: 4, description: '' },
    { name: 'Wizard Eye', level: 4, description: '' },

    // Level 5
    { name: 'Airy Water', level: 5, description: '' },
    { name: 'Animate Dead', level: 5, description: '' },
    { name: 'Chaos', level: 5, description: '' },
    { name: 'Cloudkill', level: 5, description: '' },
    { name: 'Contact Outer Sphere', level: 5, description: '' },
    { name: 'Creation, Major', level: 5, description: '' },
    { name: 'Faithful Hound', level: 5, description: '' },
    { name: 'Feeblemind', level: 5, description: '' },
    { name: 'Hold Monster', level: 5, description: '' },
    { name: 'Interposing Hand', level: 5, description: '' },
    { name: 'Magic Jar', level: 5, description: '' },
    { name: 'Passwall', level: 5, description: '' },
    { name: 'Secret Chest', level: 5, description: '' },
    { name: 'Stone Shape', level: 5, description: '' },
    { name: 'Telekinesis', level: 5, description: '' },
    { name: 'Teleport', level: 5, description: '' },
    { name: 'Transmute Rock to Mud', level: 5, description: '' },
    { name: 'Wall of Force', level: 5, description: '' },
    { name: 'Wall of Iron', level: 5, description: '' },
    { name: 'Wall of Stone', level: 5, description: '' },

    // Level 6
    { name: 'Animate Dead Monsters', level: 6, description: '' },
    { name: 'Barrier', level: 6, description: '' },
    { name: 'Contingency', level: 6, description: '' },
    { name: 'Death Spell', level: 6, description: '' },
    { name: 'Disintegrate', level: 6, description: '' },
    { name: 'Geas', level: 6, description: '' },
    { name: 'Glass Eye', level: 6, description: '' },
    { name: 'Globe of Invulnerability, Major', level: 6, description: '' },
    { name: 'Legend Lore', level: 6, description: '' },
    { name: 'Lucubration', level: 6, description: '' },
    { name: 'Mind Switch', level: 6, description: '' },
    { name: 'Move Earth', level: 6, description: '' },
    { name: 'Phantasmal Supergoria', level: 6, description: '' },
    { name: 'Projected Image', level: 6, description: '' },
    { name: 'Shades', level: 6, description: '' },
    { name: 'Speak with Monsters', level: 6, description: '' },
    { name: 'Stone to Flesh', level: 6, description: '' },
    { name: 'Suggestion, Mass', level: 6, description: '' },
    { name: 'Veil', level: 6, description: '' },
    { name: 'Weird Vortex', level: 6, description: '' },

    // Level 7
    { name: 'Animated Artwork', level: 7, description: '' },
    { name: 'Bestow Spell Ability', level: 7, description: '' },
    { name: 'Duo - Dimension', level: 7, description: '' },
    { name: 'Grasping Hand', level: 7, description: '' },
    { name: 'Instant Summons', level: 7, description: '' },
    { name: 'Invisibility, Mass', level: 7, description: '' },
    { name: 'Magic Sword', level: 7, description: '' },
    { name: 'Phase Door', level: 7, description: '' },
    { name: 'Power Word Stun', level: 7, description: '' },
    { name: 'Prismatic Sphere', level: 7, description: '' },
    { name: 'Prismatic Spray', level: 7, description: '' },
    { name: 'Prismatic Wall', level: 7, description: '' },
    { name: 'Remote Surveillance', level: 7, description: '' },
    { name: 'Reverse Gravity', level: 7, description: '' },
    { name: 'Simulacrum', level: 7, description: '' },
    { name: 'Spell Turning', level: 7, description: '' },
    { name: 'Statue', level: 7, description: '' },
    { name: 'Vanish', level: 7, description: '' },
    { name: 'Vision', level: 7, description: '' },
    { name: 'Witchlamp Aura', level: 7, description: '' },

    // Level 8
    { name: 'Antipathy / Sympathy', level: 8, description: '' },
    { name: 'Charm Person, Mass', level: 8, description: '' },
    { name: 'Clone', level: 8, description: '' },
    { name: 'Demand', level: 8, description: '' },
    { name: 'Maze', level: 8, description: '' },
    { name: 'Mind Blank', level: 8, description: '' },
    { name: 'Permanency', level: 8, description: '' },
    { name: 'Polymorph Any Object', level: 8, description: '' },
    { name: 'Symbol', level: 8, description: '' },
    { name: 'Trap the Soul', level: 8, description: '' },

    // Level 9
    { name: 'Imprisonment', level: 9, description: '' },
    { name: 'Lost Dweomer', level: 9, description: '' },
    { name: 'Power Word Kill', level: 9, description: '' },
    { name: 'Shape Change', level: 9, description: '' },
    { name: 'Temporal Stasis', level: 9, description: '' },
    { name: 'Time Stop', level: 9, description: '' }
];






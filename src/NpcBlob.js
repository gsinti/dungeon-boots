import { ArrayCoords } from 'rocket-utility-belt';

import ActorBlob from './ActorBlob.js';

const BRAINS = {
	monster: {
		wander: 0.8,
		huntPlayers: 1,
		sight: 10,
	},
	still: {
		wander: 0,
		//
	},
	wanderer: {
		wander: 0.5,
		//
	},
	villager: {
		wander: 0.1,
		//
	},
};

/** A blob of NPCs */
class NpcBlob extends ActorBlob {
	constructor(startAt = [], blockLegend = {}) {
		super(startAt, blockLegend);
		this.isNpcBlob = true;
		this.brain = null;
		if (blockLegend.npc && BRAINS[blockLegend.npc]) {
			this.brain = BRAINS[blockLegend.npc];
		}
	}

	plan(players = [], worldMap = {}) {
		const roll = Math.random();
		// If facing a wall, do a free turn
		if (this.checkFacingWall(worldMap)) {
			console.log(this.name, 'facing wall so turning');
			this.turn((roll < 0.2) ? 1 : -1); // turning is free for NPCs
		}
		if (this.brain && !this.dead) {
			// Hunters
			const huntingValue = this.brain.huntPlayers || this.aggro;
			if (this.aggro && roll < huntingValue) {
				const isHunting = this.planHunt(players, worldMap);
				if (isHunting) return;
			}
			// Wanderers
			if (this.brain.wander && roll < this.brain.wander) {
				this.planWander();
				return;
			}
		}
		this.queueCommand('wait');
	}

	planHunt(prey = [], worldMap = {}, command = 'attack') {
		let nearestPrey;
		let nearestDist = Infinity;
		const nearPrey = prey.filter((a) => {
			// If they both have factions and they're the same then don't hunt
			if (this.faction && a.faction && a.faction === this.faction) return false;
			if (a.dead) return false;
			const dist = ArrayCoords.getDistance(a.coords, this.coords);
			if (dist > this.sight) return false;
			if (dist < nearestDist) {
				nearestDist = dist;
				nearestPrey = a;
			}
			return true;
		});
		if (!nearPrey.length) return false; // No one to hunt within sight
		// TODO: Do A-star path finding to get to nearestPrey
		this.turnTowards(nearestPrey.coords);
		if (nearestDist > 1) {
			console.log(this.name, 'planning to hunt', nearPrey);
			this.queueCommand('forward');
		} else if (nearestDist === 1) {
			// TODO: Should we check getFacingActor?
			const targetActor = this.getFacingActor(worldMap);
			console.log(this.name, 'is next to', targetActor, ', so will attack');
			this.queueCommand(command);
		}
		return true;
	}

	planWander() {
		const roll = Math.random();
		if (roll < 0.5) {
			// const turnCommand = (roll < 0.1) ? 'turnRight' : 'turnLeft';
			// this.queueCommand(turnCommand);
			this.turn((roll < 0.1) ? 1 : -1); // turning is free for NPCs
			this.queueCommand('forward');
		} else {
			this.queueCommand('forward');
		}
	}
}

export default NpcBlob;
